import React, { useId, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { Item } from '../../../public/modules/collection';
import { Collection } from '../../../public/modules/collection';

const CreateCollectionPage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [form] = Form.useForm();
  const [itemName, setItemName] = useState<string>('');
  const [itemTags, setItemTags] = useState<string[]>([]);

  const handleAddItem = () => {
    const newItem: Item = {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      id: useId(),
      name: itemName,
      tags: itemTags,
    };
    form.setFieldsValue({ items: [...form.getFieldValue('items'), newItem] });
    setItemName('');
    setItemTags([]);
  };

  const handleCreate = () => {
    form.validateFields().then(values => {
      const collection: Collection = {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        id: useId(),
        name: values.name,
        theme: values.theme,
        description: values.description,
        image: values.image,
      };
      onCreate(collection, values.items);
      form.resetFields();
      setItemName('');
      setItemTags([]);
      setVisible(false);
    });
  };

  const onCreate = (collection: Collection, itemsMock: Item[]) => {
    console.log('Created collection:', collection);
    console.log('Items:', itemsMock);
  };

  return (
    <Modal
      open={visible}
      title="Create Collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={() => setVisible(false)}
      onOk={handleCreate}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="theme" label="Theme" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="image" label="Image">
          <Input />
        </Form.Item>
        <Form.Item label="Items">
          <Input
            placeholder="Item name"
            value={itemName}
            onChange={event => setItemName(event.target.value)}
            style={{ marginBottom: 8 }}
          />
          <Input
            placeholder="TagControlUi (comma separated)"
            value={itemTags.join(',')}
            onChange={event => setItemTags(event.target.value.split(','))}
            style={{ marginBottom: 8 }}
          />
          <Button onClick={handleAddItem}>Add Item</Button>
          <Form.Item name="items" noStyle>
            <Input type="hidden" />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCollectionPage;

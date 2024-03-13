import React, { useState, useEffect } from 'react';
import { List, Pagination } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Collection }                 from '../../models/interface.collection.ts';
import { mock }                       from '../../MOCK/mock.ts';
import { useNavigate }                from 'react-router-dom';
import Search                         from 'antd/es/input/Search';



const CollectionList: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    //получение коллекций
    setCollections(mock)
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [collections]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onItemClick = (collectionId: string) => {
    navigate(`/collections/${collectionId}`);
  };

  return (
    <div>
      <Search />
      <List
        itemLayout="horizontal"
        dataSource={collections.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
        renderItem={(item) => (
          <List.Item onClick={() => onItemClick(item.id)}>
            <List.Item.Meta title={item.name} />
            <RightOutlined style={{ fontSize: 16, color: '#08c' }} />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={collections.length}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default CollectionList;
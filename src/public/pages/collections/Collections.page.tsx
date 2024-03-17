import React, { useState, useEffect } from 'react';
import { Divider, List, Pagination, theme } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../../store/models/state.interface.ts';
import { SearchComponent } from '../../components';
import { Collection } from '../../modules/collections';
import Title from 'antd/es/typography/Title';

export const CollectionsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const navigate = useNavigate();
  const collections = useSelector(
    (state: State) => state.collections.collections,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [collections]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onItemClick = (collectionId: string) => {
    navigate(`/collections/${collectionId}`);
  };

  const {
    token: { colorLink },
  } = theme.useToken();

  return (
    <div>
      <SearchComponent />
      <Divider />
      <Title>Collections</Title>
      <List
        itemLayout="horizontal"
        dataSource={collections.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize,
        )}
        renderItem={(item: Collection) => (
          <List.Item
            onClick={() => onItemClick(item.id)}
            style={{ cursor: 'pointer' }}
          >
            <List.Item.Meta title={item.name} />
            <RightOutlined
              size={12}
              style={{
                color: colorLink,
              }}
            />
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

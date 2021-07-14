import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './slice'
import Card from '../../components/card'
import { Row, Col, Button } from 'antd'
import { HomePageStyle } from './style'
import Modal from '../../components/modal'
import { showModal } from './slice'

export default function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  const show=()=>{
    dispatch(showModal())
  }

  return (
    <HomePageStyle>
      <Button onClick={()=>show()}>Add</Button>
      <Modal modal = {data.modal}></Modal>
      <Row gutter={[16, 16]}>
        {data?.data.map((post) => (
          <Col span={6}>
            <Card data={post}></Card>
          </Col>
        ))}
      </Row>
    </HomePageStyle >
  )
}

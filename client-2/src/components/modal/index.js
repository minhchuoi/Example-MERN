import React from "react";
import { ModalStyle } from "./style";
import { useDispatch } from "react-redux";
import { closeModal, getData, createData } from "../../pages/home/slice";
import { Formik } from "formik";
import { Row, Col } from "antd";
import { Input, Form } from "formik-antd";
import * as Yup from "yup";

export default function Modal(modal) {
  const dispatch = useDispatch();

  window.onclick = (event) => {
    if (event.target === document.getElementById("myModal")) {
      dispatch(closeModal());
    }
  };
  const submitForm = async (values) => {
    console.log(values);
    await dispatch(createData(values));
    dispatch(getData());
    dispatch(closeModal());
  };
  return (
    <ModalStyle id="myModal" display={modal.modal}>
      <div className={modal.modal}>
        <Formik
          initialValues={{
            title: "",
            content: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Required"),
            content: Yup.string().required("Required"),
          })}
          onSubmit={(values, actions) => {
            submitForm(values);
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Row justify="center">
                <Col span={4}>
                  <label>Title:</label>
                </Col>
                <Col span={8}>
                  <Input name="title" />
                  {errors.title && touched.title ? (
                    <div classNAme="error">{errors.title}</div>
                  ) : null}
                </Col>
              </Row>
              <Row justify="center">
                <Col span={4}>
                  <label>Content:</label>
                </Col>
                <Col span={8}>
                  <Input name="content" />
                  {errors.content && touched.content ? (
                    <div classNAme="error">{errors.content}</div>
                  ) : null}
                </Col>
              </Row>
              <button className="btn" type="submit">
                Oke
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalStyle>
  );
}

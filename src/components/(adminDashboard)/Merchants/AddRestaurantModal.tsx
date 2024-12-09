import {
  Button,
  Form,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
  TimePicker,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RiCloseLargeLine } from "react-icons/ri";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import type { Dayjs } from "dayjs";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const AddRestaurantModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  const [openTime, setOpenTime] = useState<Dayjs | null>(null);
  const [closeTime, setCloseTime] = useState<Dayjs | null>(null);
  const [homeDelivey, setHomeDelivey] = useState("yes");

  const onChangeOpenTime = (time: Dayjs) => {
    setOpenTime(time);
    console.log(openTime);
  };
  const onChangeCloseTime = (time: Dayjs) => {
    setCloseTime(time);
    console.log(closeTime);
  };

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };

  const hadleHomeDelivery = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setHomeDelivey(e.target.value);
  };

  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "900px",
        position: "relative",
      }}
    >
      <div
        className="w-12 h-12 bg-main-color  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine
          size={18}
          color="#fff"
          className="absolute top-1/3 left-1/3"
        />
      </div>
      <div>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{
            marginTop: "40px",
          }}
        >
          <div className="flex gap-12">
            <div className="flex-1">
              {/*  input  restaurant name */}
              <Form.Item
                label="Restaurant Name"
                name="restaurantName"
                rules={[
                  { required: true, message: "Please enter restaurant name" },
                ]}
                style={{ width: "100%" }}
              >
                <Input
                  size="large"
                  placeholder="Enter Restaurant Name "
                ></Input>
              </Form.Item>

              {/*  input  email */}
              <Form.Item
                label="Email"
                name="email"
                rules={[{ type: "email", required: true }]}
              >
                <Input size="large" placeholder="Enter email "></Input>
              </Form.Item>

              {/* input  phone number  */}
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <Input size="large" placeholder="Enter phone number "></Input>
              </Form.Item>

              {/* input  what's number  */}
              <Form.Item
                label="Whatsapp Number"
                name="phoneWhatsapp"
                rules={[
                  { required: true, message: "Please enter what's number" },
                ]}
              >
                <Input size="large" placeholder="Enter what's number"></Input>
              </Form.Item>

              {/*  input  tile*/}
              <Form.Item label="Select Time" style={{ width: "100%" }}>
                <div className="flex justify-between gap-4">
                  <TimePicker
                    value={openTime}
                    onChange={onChangeOpenTime}
                    size="large"
                    placeholder="Open Time"
                    style={{ width: "100%" }}
                  />
                  <TimePicker
                    value={closeTime}
                    onChange={onChangeCloseTime}
                    size="large"
                    placeholder="Closed Time"
                    style={{ width: "100%" }}
                  />
                </div>
              </Form.Item>

              {/* input address */}
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please enter address" }]}
                style={{ width: "100%" }}
              >
                <Input size="large" placeholder="Enter address "></Input>
              </Form.Item>

              {/* input description */}
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please enter description" },
                ]}
                style={{ width: "100%" }}
              >
                <TextArea rows={4} placeholder="Write Description"></TextArea>
              </Form.Item>
            </div>

            <div className="flex-1">
              {/*  input delivery*/}
              <Form.Item
                label="Do You have home delivery?"
                style={{ width: "100%" }}
              >
                {/* input institutetion type */}
                <Radio.Group
                  onChange={hadleHomeDelivery}
                  defaultValue={homeDelivey}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
              </Form.Item>

              {/* image upload  */}
              <Form.Item
                name="image"
                valuePropName="fileList"
                getValueFromEvent={(e) =>
                  Array.isArray(e) ? e : e && e.fileList
                }
                rules={[{ required: true }]}
                style={{
                  textAlign: "center",
                  border: "2px dashed #B87CAE",
                  paddingBlock: "20px",
                  borderRadius: "10px",
                }}
              >
                <Upload
                  name="image"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Upload Menu Image</Button>
                </Upload>
              </Form.Item>
            </div>
          </div>
          <Button htmlType="submit" size="large" block>
            Upload
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default AddRestaurantModal;

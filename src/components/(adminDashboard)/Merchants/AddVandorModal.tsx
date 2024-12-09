import { Button, Form, Input, Modal, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
const handleSubmit = (values) => {
  console.log("Success:", values);
};

const AddVandorModal = ({ open, setOpen }: TPropsType) => {
  const [instituteType, setinstituteType] = useState("restaurant");
  const [form] = Form.useForm();

  const hadleInstituteType = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setinstituteType(e.target.value);
  };
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
      }}
    >
      <div>
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
        <div className="pb-10">
          <h4 className="text-center text-2xl font-medium">Add Vendor</h4>
        </div>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{
            maxWidth: 500,
            marginTop: "25px",
          }}
        >
          {/*  input  name */}
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter full name" }]}
          >
            <Input size="large" placeholder="Enter full name "></Input>
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
            rules={[{ required: true, message: "Please enter phone number" }]}
          >
            <Input size="large" placeholder="Enter phone number "></Input>
          </Form.Item>

          <Form.Item label="Category" name="category">
            {/* input institutetion type */}
            <Radio.Group
              onChange={hadleInstituteType}
              defaultValue={instituteType}
            >
              <Radio value={"restaurant"}>Restuarant</Radio>
              <Radio value={"Market"}>Market...</Radio>
              {instituteType === "Market" ? (
                <div className="ml-[118px] mt-2">
                  <Radio.Group
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Radio value={"Auto"}>Auto</Radio>
                    <Radio value={"Supershop"}>Supershop</Radio>
                    <Radio value={"RealEstate"}>Real Estate</Radio>
                  </Radio.Group>
                </div>
              ) : null}
            </Radio.Group>
          </Form.Item>
          <Button htmlType="submit" size="large" block>
            Add
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default AddVandorModal;

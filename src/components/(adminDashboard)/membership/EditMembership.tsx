import { Button, Form, FormProps, Input, InputNumber, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
type FieldType = {
  name?: string;
  duration?: string;
  price?: number;
};

const EditMembership = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
}) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
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
        position: "relative",
      }}
    >
      <div
        className="w-12 h-12 bg-[#D7263D]  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine
          size={18}
          color="#fff"
          className="absolute top-1/3 left-1/3"
        />
      </div>
      <h3 className="text-2xl font-semibold text-center my-3">
        Edit Membership
      </h3>

      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        className="md:w-[481px]"
      >
        <Form.Item<FieldType> label="Membership name" name="name">
          <Input size="large" className="bg-gray-300" />
        </Form.Item>

        <Form.Item<FieldType> label="Membership duration" name="duration">
          <Input size="large" className="bg-gray-300" />
        </Form.Item>
        <Form.Item<FieldType> label="Membership duration" name="price">
          <InputNumber
            min={1}
            style={{
              width: "100%",
              padding: "5px 0px",
              border: "1px solid #8d2e7d",
            }}
          />
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button
            htmlType="submit"
            size="large"
            style={{
              backgroundColor: "#8d2e7d",
              color: "#F8FAFC",
              padding: "0 20px",
            }}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditMembership;

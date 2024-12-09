"use client";
import { AutoComplete, AutoCompleteProps } from "antd";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import VendorTable from "./VendorTable";
import AddVandorModal from "./AddVandorModal";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const VendorContainer = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
    console.log(value);
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-[#333] text-4xl font-medium">Vendors</h1>
        <div className="flex gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 bg-gradient-to-r from-[#CD0335] to-[#E53B5D] hover:from-[#c29cb8] hover:to-[#c2445d] rounded-md text-white font-bold"
          >
            Add Vendor
          </button>

          <div className="relative border border-main-color rounded-lg">
            <AutoComplete
              options={options}
              style={{ width: 330 }}
              size="large"
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              onChange={onChange}
              placeholder="Search"
            />
            <div className="absolute top-3 right-5">
              <RiSearchLine size={15} />
            </div>
          </div>
        </div>
      </div>
      {/* vendor table */}
      <VendorTable></VendorTable>
      <AddVandorModal open={open} setOpen={setOpen}></AddVandorModal>
    </div>
  );
};

export default VendorContainer;

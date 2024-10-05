import React from "react";
import supabase from "../../supabaseClient";
import PageContainer from "../Components/Common/PageContainer";
import { data } from "autoprefixer";

const Api = () => {
  // .insert([
  //     {
  //       name: "Surjapur Mango",
  //       category: "Vegetables",
  //       price: 34,
  //       image_url:
  //         "https://mmimwhdzlgveordweoop.supabase.co/storage/v1/object/public/Images/mango.png?t=2024-09-14T09%3A40%3A36.215Z",
  //     },
  //   ]);
  const handleInsert = async () => {
    const { data, error } = await supabase.from("Shopery_Data").select("*");
    if (error) {
      console.error("Error fetching data: ", error);
    } else {
      console.log("Fetched Data: ", data);
    }
  };

  return (
    <PageContainer>
      <div>
        <button onClick={handleInsert} className="border 1px solid">
          Show Data
        </button>
      </div>
    </PageContainer>
  );
};

export default Api;

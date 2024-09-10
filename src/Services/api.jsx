import React from "react";
import supabase from "../../supabaseClient";
import PageContainer from "../Components/Common/PageContainer";

const Api = () => {
  const handleInsert = async () => {
    const { data, error } = await supabase.rpc("pg_execute", {
      query: `
        ALTER TABLE Shopery_Data
        ADD COLUMN created_at timestamp;
        `,
    });
    if (error) {
      console.error("Error inserting column: ", error);
    } else {
      console.log("Column Added: ", data);
    }
  };

  return (
    <PageContainer>
      <div>
        <button onClick={handleInsert} className="border 1px solid">
          Insert Column
        </button>
      </div>
    </PageContainer>
  );
};

export default Api;

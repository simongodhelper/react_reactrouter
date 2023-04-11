import Layout from "../components/Layout";

const AddView = () => {
  const title = "AddView";
  const subtitle = "Welcome to AddView";

  return (
    <div>
      <Layout title={title} subtitle={subtitle}>
        <h1 style={{ textAlign: "center" }}>AddView</h1>
      </Layout>
    </div>
  );
};

export default AddView;

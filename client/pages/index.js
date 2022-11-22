import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log("Current User ", currentUser);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("./api/users/currentuser");

  return data;
};

export default LandingPage;

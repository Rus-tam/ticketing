import axios from "axios";

const index = ({ currentUser }) => {
  console.log("Current User ", currentUser);
  return <h1>Landing page</h1>;
};

index.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // we are on the server!
    // requests should be made to http://ingress-nginx.ingres
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: {
          Host: "ticketing.dev",
        },
      }
    );

    return data;
  } else {
    // we are on the brouser
    // requests can be made with a base url of ''
    const { data } = await axios.get("/api/users/currentuser");

    return data;
  }
};

export default index;

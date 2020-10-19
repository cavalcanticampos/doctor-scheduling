import React, { useEffect, useState } from "react";
import { Gout } from "../../atoms/Elements";
import { BASE_URL } from "../../assets/baseUrl";
import {
  Card,
  CardTitle,
  Container,
  GoutElement,
  Title,
  Subtitle,
  WrapperButton,
  CreateButton,
} from "./styles";
import { TOKENNAME } from "../../assets/constants";

const AppointmentsList = (props) => {
  const [appointments, setAppointments] = useState([]);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  useEffect(() => {
    const fetchAppointments = () => {
      fetch(BASE_URL + "appointment/list/" + user._id, {
        headers: {
          "x-access-token": localStorage.getItem(TOKENNAME),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message && data.message === "No Token Provided") {
            alert("Logout, please Singup again");
            props.history.push("/");
          } else {
            setAppointments(data);
          }
        })
        .catch(() => alert("Error to Fetch, if persists, create a ticket!"));
    };
    fetchAppointments();
  }, [props.history, user._id]);

  return (
    <Container>
      <GoutElement>
        <Gout />
      </GoutElement>
      <WrapperButton>
        <CreateButton
          onClick={() => props.history.push("/appointments/create")}
        >
          +
        </CreateButton>
      </WrapperButton>
      <Title>Your Appointments {user && "- " + user.name}</Title>
      <Subtitle>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </Subtitle>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {appointments !== [] &&
          appointments.map((appointment) => (
            <Card key={appointment._id}>
              <CardTitle>{appointment.name}</CardTitle>
              <div>
                <strong>Doctor:</strong> {appointment.doctorName}
              </div>
              <div>
                <strong>Details:</strong> {appointment.description}
              </div>
              <div>
                <strong>in Next:</strong> {appointment.date}
              </div>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default AppointmentsList;

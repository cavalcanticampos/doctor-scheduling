import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Input, Button, Dropdown } from "../../atoms";
import { DotGrid, Gout } from "../../atoms/Elements";
import { BASE_URL } from "../../assets/baseUrl";
import { TOKENNAME } from "../../assets/constants";
import {
  Container,
  DotGridElement,
  Form,
  GoutElement,
  Title,
  Subtitle,
} from "./styles";
import "react-calendar/dist/Calendar.css";

const NewAppointment = (props) => {
  const [doctor, setDoctor] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [date, onChangeDate] = useState(new Date());
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const fetchDoctors = () => {
    fetch(BASE_URL + "user/list/doctors", {
      headers: {
        "x-access-token": localStorage.getItem(TOKENNAME),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDoctorList(data);
      });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleLanguageClick = (id) => {
    doctor === id ? setDoctor(null) : setDoctor(id);
  };

  const create = () => {
    const data = {
      name: name,
      description: description,
      doctorName: doctor,
      userId: user._id,
      date: date.toLocaleString(),
    };
    if (data.name && data.description && data.doctorName && data.date) {
      fetch(BASE_URL + "appointment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-access-token": localStorage.getItem(TOKENNAME),
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          props.history.push("/appointments");
        })
        .catch(() => {
          alert(
            "Error: Please check your connection! If error persists, create a ticket."
          );
        });
    } else {
      alert("Error: Please verify error in text fields below!");
    }
  };

  return (
    <Container>
      <GoutElement>
        <Gout />
      </GoutElement>
      <DotGridElement>
        <DotGrid />
      </DotGridElement>
      <Form>
        <Title>Create Appointment</Title>
        <Subtitle>
          New appointment to <strong>{user && user.name}</strong>
        </Subtitle>
        <Input
          type="text"
          placeholder="Appointment Name"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Dropdown
          width="-webkit-fill-available"
          onClick={(event) => handleLanguageClick(event.target.id)}
          selectedItem={doctor}
          placeholder="Choose a Doctor"
          data={doctorList}
        />
        <div style={{ margin: "8px 0 " }}>
          <label>Choose an Appointment Date</label>
          <Calendar locale={"pt-BR"} onChange={onChangeDate} value={date} />
        </div>
        <Button onClick={create}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewAppointment;

import { useState } from "react";
import styles from "./Form.module.css";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preference, setPreference] = useState("");
  // const [selectedServices, setSelectedServices] = useState<serviceType[]>([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleName = (value: string) => {
    setName(value);
  };

  const handlePhone = (value: string) => {
    setPhone(value);
  };

  const handlePreference = (value: string) => {
    setPreference(value);
  };

  // const handleServices = (service: serviceType) => {
  //   const selectedService = selectedServices.find(
  //     (item: serviceType) => item.id === service.id
  //   );

  //   if (selectedService) {
  //     setSelectedServices((prev: serviceType[]) => {
  //       return prev.filter((item: serviceType) => item.id !== service.id);
  //     });
  //   } else {
  //     setSelectedServices((prev: serviceType[]) => [...prev, service]);
  //   }
  // };

  // const ServiceFormCard = ({
  //   name,
  //   selected = false,
  // }: {
  //   name: string;
  //   selected?: boolean;
  // }) => {
  //   let iconColor = "";
  //   let containerStyle = "";
  //   let dotStyle = "";

  //   if (selected) {
  //     iconColor = primaryColor;
  //     containerStyle = `${styles.serviceContainer} ${styles.serviceContainerSelected}`;
  //     dotStyle = `${styles.dot} ${styles.dotSelected}`;
  //   } else {
  //     iconColor = gray;
  //     containerStyle = styles.serviceContainer;
  //     dotStyle = styles.dot;
  //   }

  //   return (
  //     <div className={containerStyle}>
  //       <div className={styles.header}>
  //         <ServiceIcon color={iconColor} width="20px" height="20px" />
  //         <div className={dotStyle}></div>
  //       </div>
  //       <div>{name}</div>
  //     </div>
  //   );
  // };

  const SERVICE_ID = "service_lqpycft";
  const TEMPLATE_ID = "template_866jti9";
  const PUBLIC_KEY = "wE5qVzn8vaffSgKQY";

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPreference("");
  };

  const handleSendEmail = (e: any) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone,
      preference: preference,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          emailjs
            .send(SERVICE_ID, "template_9vu3oz7", formData, {
              publicKey: PUBLIC_KEY,
            })
            .then(
              () => {
                handleResetForm();
                alert("Your request was submitted!");
              },
              (error: any) => {}
            );
          handleResetForm();
        },
        (error: any) => {}
      );
  };

  return (
    <form className={styles.container} onSubmit={handleSendEmail}>
      <div className={styles.title}>Request your consultation now</div>
      <div className={styles.info}>
        Fill out the form and I'll start your immigration process today
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div className={styles.field}>
          <div className={styles.label}>Full name *</div>
          <input
            className={styles.emailInput}
            type="text"
            name="name"
            value={name}
            placeholder="Enter your full name"
            onChange={(e) => handleName(e.target.value)}
            required
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div className={styles.field}>
          <div className={styles.label}>Phone number *</div>
          <input
            className={styles.emailInput}
            type="tel"
            name="tel"
            value={phone}
            placeholder="Enter your phone number"
            onChange={(e) => handlePhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div className={styles.field}>
          <div className={styles.label}>E-mail *</div>
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => handleEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Contact Us
      </button>
    </form>
  );
};

export default ContactUsForm;

import emily from "../assets/images/image-emily.jpg";
import thomas from "../assets/images/image-thomas.jpg";
import jennie from "../assets/images/image-jennie.jpg";

const clients = [
  {
    id: 0,
    name: "Emily R.",
    occupation: "Marketing Director",
    testimonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    image: emily,
  },
  {
    id: 1,
    name: "Thomas S.",
    occupation: "Chief Operating Officer",
    testimonial:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    image: thomas,
  },
  {
    id: 2,
    name: "Jennie F.",
    occupation: "Business Owner",
    testimonial:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    image: jennie,
  },
];

const Fourth = () => {
  return (
    <section className="fourth">
      <h2>Client Testimonials</h2>
      {clients.map((client) => {
        return (
          <div className="client" key={client.id}>
            <img
              src={client.image}
              className="rounded-full w-14 h-14"
              alt="Profile picture"
            />
            <p>{client.testimonial}</p>
            <h4>{client.name}</h4>
            <h5>{client.occupation}</h5>
          </div>
        );
      })}
    </section>
  );
};

export default Fourth;

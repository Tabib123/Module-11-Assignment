
function Service() {
  const services = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Data Science', icon: '📊' },
    { name: 'Machine Learning', icon: '🤖' },
  ];

  return (
    <section id="service">
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.name}>
            {service.icon} {service.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Service;

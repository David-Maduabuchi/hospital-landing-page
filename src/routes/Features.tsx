import FeatureCard from "../components/feature-card/FeatureCard";

const Features = ({ id }: { id: string }) => {
  return (
    <div className="features" id={id}>
      <h3 className="title">Our Features</h3>
      <p className="des">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>

      <div className="flex-feature-card">
        <FeatureCard
          title="Emergency Care"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi impedit"
        />
        <FeatureCard
          title="Qualified Doctors"
          description="soluta saepe. Vitae non amet eum, voluptatibus aut voluptas quos velit"
        />
        <FeatureCard
          title="24/7 Hours Service"
          description="autem cumque neque inventore, qui, fugiat quasi adipisci saepe."
        />
      </div>
    </div>
  );
};

export default Features;

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
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;

import PatCard from "../../components/Pat-Card/PatCard";
import "./Patients.scss";
const Patients = ({ id }: { id: string }) => {
  return (
    <div className="patients" id={id}>
      <header>
        <h3>Personalised Care Plans</h3>
        <div className="description">
          <div className="line"></div>
          <p>
            Empower people everywhere to self-manage their chronic conditions.
            Enable health ecosystems to optimize interventions, clinical
            decisions and population health.
          </p>
        </div>
      </header>

      <div className="pat-body">
        <div className="first">
          <PatCard
            src="https://www.welldoc.com/wp-content/uploads/2022/03/care-anywhere.svg"
            title="Medication & Appointment Reminders"
            description="Stay on top of your medications and appointments with timely reminders  (Alarm, Email, Calendar) ."
          />
          <PatCard
            src="https://www.welldoc.com/wp-content/uploads/2022/03/care-anywhere.svg"
            title="Customize care plans per patient (VPP builder)
"
            description="Stay on top of your medications and appointments with timely reminders  (Alarm, Email, Calendar) ."
          />
          <PatCard
            src="https://www.welldoc.com/wp-content/uploads/2022/03/care-anywhere.svg"
            title="Medication & Appointment Reminders"
            description="Stay on top of your medications and appointments with timely reminders  (Alarm, Email, Calendar) ."
          />
          <PatCard
            src="https://www.welldoc.com/wp-content/uploads/2022/03/care-anywhere.svg"
            title="Medication & Appointment Reminders"
            description="Stay on top of your medications and appointments with timely reminders  (Alarm, Email, Calendar) ."
          />
          <PatCard
            src="https://www.welldoc.com/wp-content/uploads/2022/03/care-anywhere.svg"
            title="Medication & Appointment Reminders"
            description="Stay on top of your medications and appointments with timely reminders  (Alarm, Email, Calendar) ."
          />
          <PatCard
            src="https://www.welldoc.com/wp-content/uploads/2022/03/care-anywhere.svg"
            title="Medication & Appointment Reminders"
            description="Stay on top of your medications and appointments with timely reminders  (Alarm, Email, Calendar) ."
          />
        </div>
        <div className="second">
          <img
            src="https://www.clafiya.com/images/home/speakTodoctor/sickness11.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Patients;

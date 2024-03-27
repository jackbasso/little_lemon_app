import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmed");
    //props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <h2 className="footer-title">Book your table</h2>
              <label htmlFor="book-date">Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
            </div>

            {/* time selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                <option value="">Select a Time:</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            {/* Number of Guests */}
            <div>
              <label htmlFor="book-guest">Number of Guests</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>
            {/* Occasion */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Anniversary</option>
                <option>Family reunion</option>
                <option>Other</option>
              </select>
            </div>
            {/* submit button */}
            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value={"Submit Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};
export default BookingForm;

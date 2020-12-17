import React, { useEffect, useState } from "react";

import ExpandIcon from "./expand-more.svg";
import CloseIcon from "./close-icon.svg";

import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import {
  Container,
  CalendarInfo,
  DateRangeStyles,
  ArrowNext,
  MODALLIKE,
} from "./styles";

const Formated = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    console.log(focusedInput);
  }, [focusedInput]);

  // FIXME
  const renderIconPrev = () => {
    return <img className="button prev" src={ExpandIcon} alt="" />;
  };

  // FIXME
  const renderIconNext = () => {
    return <img className="button next" src={ExpandIcon} alt="" />;
  };

  return (
    <MODALLIKE>
      <Container>
        {/* <div className="last"> */}
        {focusedInput && (
          <>
            <CalendarInfo>
              <p>Validity</p>

              <strong>
                {startDate && (
                  <>
                    {startDate.format("MMM D, YYYY")}
                    <ArrowNext src={ExpandIcon} alt="" />
                  </>
                )}
                {endDate && endDate.format("MMM D, YYYY")}
              </strong>
            </CalendarInfo>
            <img src={CloseIcon} alt="" />
          </>
        )}
        <DateRangeStyles isFocused={focusedInput}>
          <DateRangePicker
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            numberOfMonths={1}
            hideKeyboardShortcutsPanel
            noBorder
            reopenPickerOnClearDates
            navPrev={renderIconPrev()}
            navNext={renderIconNext()}
            // keepOpenOnDateSelect
            small
          />
        </DateRangeStyles>
      </Container>
    </MODALLIKE>
  );
};

export default Formated;

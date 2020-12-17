import React, { Component } from "react";

import moment from "moment";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import ExpandIcon from "./expand-more.svg";
import CloseIcon from "./close-icon.svg";

import "./test.css";

class App extends Component {
  constructor(props) {
    super();
    const test = {
      months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        "_"
      ),
      monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
      monthsParseExact: true,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
        "_"
      ),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "D_S_T_Q_Q_S_S".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm",
      },
    };
    moment.locale("br", test);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  renderIconPrev() {
    return <img className="button prev" src={ExpandIcon} alt="" />;
  }

  renderIconNext() {
    return <img className="button next" src={ExpandIcon} alt="" />;
  }

  render() {
    return (
      <div
        className="container"
        onClick={() => console.log(this.state.startDate, this.state.endDate)}
      >
        <div className="last">
          {this.state.focusedInput && (
            <>
              <div className="info-container">
                <div>
                  <p>Validity</p>

                  <strong>
                    {this.state.startDate && (
                      <>
                        {this.state.startDate.format("MMM D, YYYY")}
                        <img className="arrow-next" src={ExpandIcon} alt="" />
                      </>
                    )}
                    {this.state.endDate &&
                      this.state.endDate.format("MMM D, YYYY")}
                  </strong>
                </div>
              </div>
              <img className="close" src={CloseIcon} alt="" />
            </>
          )}
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={1}
            hideKeyboardShortcutsPanel
            noBorder
            reopenPickerOnClearDates
            navPrev={this.renderIconPrev()}
            navNext={this.renderIconNext()}
            // keepOpenOnDateSelect
            small
          />
        </div>
      </div>
    );
  }
}

export default App;

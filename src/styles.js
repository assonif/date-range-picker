import styled, { css } from "styled-components";

export const MODALLIKE = styled.div`
  margin: 20vh auto;

  width: 400px;

  background: #f7f7f7;

  padding: 52px;

  box-sizing: border-box;

  border-radius: 16px;

  display: flex;
`;

export const Container = styled.div`
  width: 320px;
  height: 100%;

  position: relative;

  > img {
    position: absolute;
    top: 23px;
    right: 0px;
    width: 10px;
    cursor: pointer;
    z-index: 10 !important;
  }

  .button {
    position: absolute;
    top: 29px;

    height: 12px;
    width: 12px;
  }

  // FIXME
  .next {
    right: 22px;

    transform: rotate(90deg);
  }
  // FIXME
  .prev {
    left: 22px;

    transform: rotate(-90deg);
  }
`;

export const CalendarInfo = styled.div`
  position: absolute;

  margin-top: 5px;

  background-color: #f7f7f7;
  box-sizing: border-box;

  width: 320px;
  height: 399px;

  border-radius: 16px;

  padding: 16px 24px 0px 24px;

  > p {
    color: #131313;
    font-size: 12px;
    margin: 0 auto;
  }

  > strong {
    color: #131313;
    font-size: 14px;
    font-weight: 600;
    margin-top: 8px;

    display: flex;
    align-items: center;
  }
`;
export const ArrowNext = styled.img`
  width: 10px;
  transform: rotate(90deg);
  margin: 0 8px;
`;

export const DateRangeStyles = styled.div`
  // Input

  .DateInput {
    background: transparent;
    margin-right: 8px;

    width: 112px;

    z-index: 10 !important;
  }

  .DateInput_input {
    background: #fff;

    box-sizing: border-box;

    border: 1px solid #ededed !important;
    border-radius: 8px;

    transition: top 1s left 1s;
    ${(props) =>
      props.isFocused &&
      css`
        position: absolute;
        top: 64px;
        left: 23px;
      `}
  }

  .DateInput_input__focused {
    border: 0;
  }

  .DateRangePickerInput_arrow {
    display: none;
  }

  .DateRangePickerInput {
    background: transparent;
  }

  // Calendar Container

  .DayPicker {
    padding-top: 100px;
    margin-top: -47px;
  }

  .CalendarMonth_table {
    border-spacing: 6px 8px !important;
    border-collapse: unset;
  }

  .CalendarMonth,
  .DayPicker__horizontal {
    background: transparent;
  }

  .DayPicker__horizontal {
    box-shadow: 0px 4px 24px #1313131a;
    border: 1px solid #ededed;
    border-radius: 16px;
  }

  .CalendarMonthGrid {
    background: none;
  }

  .DateRangePicker_picker {
    border-radius: 16px;
    background: linear-gradient(
      0deg,
      #f7f7f7 0%,
      #f7f7f7 50%,
      rgba(247, 247, 247, 0) 100%
    );
  }

  .DateInput_fang > path {
    display: none;
  }

  .DateRangePicker_picker {
    z-index: 0;
  }

  // Week Days

  .DayPicker_weekHeader {
    padding: 0px 16px !important;
  }

  .DayPicker_weekHeader_li {
    width: 38px !important;
  }

  // Days

  .CalendarDay__default {
    border: none;
  }

  .CalendarDay {
    border-radius: 20%;

    width: 32px !important;
    height: 28px !important;
  }

  .CalendarDay__selected {
    background: #b59403;
    color: white;
  }

  .CalendarDay__selected:hover {
    background: #f9cb04;
    color: white;
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span,
  .CalendarDay__selected_span,
  .CalendarDay__selected_span:hover {
    background: #f9cb04;
  }
`;

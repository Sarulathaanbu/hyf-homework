
  function getEventWeekday (dayList) {
      const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const today = new Date();
      const eventWeekDay = (today.getDay() + dayList) % 7;
      return weekDays[eventWeekDay];
    }

    console.log(getEventWeekday(6));
    console.log(getEventWeekday(2));

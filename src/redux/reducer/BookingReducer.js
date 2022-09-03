import { DAT_GHE, HUY_GHE } from "../type/datGheType";

const stateDefault = {
  dsghe: [],
};

const BookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let dsupdate = [...state.dsghe];
      let index = dsupdate.findIndex(
        (dsghedat) => dsghedat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        dsupdate.splice(index, 1);
      } else {
        dsupdate.push(action.ghe);
      }
      state.dsghe = dsupdate;
      return { ...state };
    }
    case HUY_GHE: {
      let dsupdate = [...state.dsghe];
      let index = dsupdate.findIndex(
        (dsghedat) => dsghedat.soGhe === action.soGhe
      );
      if (index !== -1) {
        dsupdate.splice(index, 1);
      }
      state.dsghe = dsupdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BookingReducer;

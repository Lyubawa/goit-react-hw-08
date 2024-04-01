// import { createSelector } from '@reduxjs/toolkit';
// import { selectContatcsFilter } from '../filters/slice';

export const selectLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;
// export const selectFilterContacts = state => state.contacts.filter;
// export const selectError = state => state.contacts.error;
// MEMO
// export const selectFilterContacts = createSelector(
//   [selectContacts, selectContatcsFilter],
//   (contacts, contactsFilter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
//     );
//   }
// );

// З ЦЬОГО РОБИТИ МЕМО
// export const selectFilterContacts = state => {
//   const contacts = selectContacts(state);
//   const contactsFilter = selectContatcsFilter(state);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
//   );
// };

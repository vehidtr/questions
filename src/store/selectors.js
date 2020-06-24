import { selector } from 'recoil';
import { questionAtom, searchAtom } from './atoms';

export const filterNames = selector({
  key: 'filterNames',
  get: ({ get }) => {
    const question = get(questionAtom);
    const searchValue = get(searchAtom);
    const filtered = question.filter(name =>
      name.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filtered;
  }
});

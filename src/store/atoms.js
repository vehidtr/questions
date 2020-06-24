import { atom } from 'recoil';

export const questionAtom = atom({
  key: 'questionAtom',
  default: [
    {
      id: 1,
      title: 'div height always return 0',
      date: '6 days ago',
      question: `I have a div and inside it renders a certain paragraph. This paragraph can vary according to user.

      i want to calculate the number of lines inside this div. For that i have used a function like this
      
      Here 20 is my lineHeight.
      
      Even if i have content inside my div it always returns the divHeight as 0. What seems to be the issue here and how do i fix it?
      `,
      favorited: true,
      tags: ['javascript', 'html', 'css']
    },
    {
      id: 2,
      title: 'react-native-settings-list showing up empty',
      date: '1 day ago',
      question: `I'm trying to use react-native-settings-list. So I used part of the code over there and tried to create two items for my settings list. However they look empty on my app? Why?`,
      favorited: false,
      tags: ['javascript', 'react', 'react-native']
    }
  ]
});

export const searchAtom = atom({
  key: 'searchAtom',
  default: ''
});

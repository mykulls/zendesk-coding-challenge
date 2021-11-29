import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Tickets from './tickets';

const tickets = [
  {
    requester_id: 1,
    assignee_id: 5,
    subject: 'velit eiusmod reprehenderit officia cupidatat',
    description: 'Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.',
    tags: [
      'est',
      'nisi',
      'incididunt',
    ],
  },
  {
    requester_id: 2,
    assignee_id: 8,
    subject: 'excepteur laborum ex occaecat Lorem',
    description: 'Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.',
    tags: [
      'labore',
      'voluptate',
      'amet',
    ],
  },
  {
    requester_id: 3,
    assignee_id: 10,
    subject: 'ad sunt qui aute ullamco',
    description: 'Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.',
    tags: [
      'laborum',
      'mollit',
      'proident',
    ],
  },
  {
    requester_id: 4,
    assignee_id: 10,
    subject: 'aliquip mollit quis laborum incididunt',
    description: 'Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla. In in Lorem minim dolor laboris reprehenderit ad Lorem. Cupidatat laborum qui mollit nostrud magna ullamco. Tempor nisi ex ipsum fugiat dolor proident qui consectetur anim sunt. Dolore consectetur in ex esse et aliqua fugiat enim Lorem ea Lorem incididunt. Non amet elit pariatur commodo labore officia esse anim. In do mollit commodo nulla ullamco culpa cillum incididunt.\n\nEt nostrud aute fugiat voluptate tempor ad labore in elit et sunt. Enim quis nulla eu ut sit. Pariatur irure officia occaecat non dolor est excepteur anim incididunt commodo ea cupidatat minim excepteur. Cillum proident tempor laborum amet est ipsum ipsum aliqua sit sunt reprehenderit fugiat aliqua ea.',
    tags: [
      'consectetur',
      'mollit',
      'sit',
    ],
  },
  {
    requester_id: 5,
    assignee_id: 10,
    subject: 'nisi aliquip ipsum nostrud amet',
    description: 'Aute Lorem fugiat ad consectetur sint fugiat. Et qui ipsum in qui nostrud nulla qui et occaecat culpa ad occaecat. Aute mollit occaecat mollit proident nostrud non ea laboris adipisicing deserunt officia. Eiusmod sint fugiat veniam consectetur consequat exercitation esse est.\n\nVelit est ipsum labore aliquip quis mollit laborum in. Consectetur cillum proident ullamco exercitation pariatur. Incididunt consectetur tempor adipisicing esse minim mollit Lorem.',
    tags: [
      'et',
      'occaecat',
      'cillum',
    ],
  },
  {
    requester_id: 6,
    assignee_id: 9,
    subject: 'cillum quis nostrud labore amet',
    description: 'Deserunt officia ea fugiat dolor eu laboris esse reprehenderit deserunt dolore voluptate amet culpa. Proident ut mollit adipisicing occaecat Lorem do ut ex aute laboris fugiat minim dolor. In anim non nostrud adipisicing aliquip nisi laborum cupidatat officia. Sunt cillum sint anim elit culpa commodo amet excepteur consectetur veniam nulla ut. Officia ut ut sit incididunt cupidatat velit proident cupidatat voluptate eu ex.\n\nVelit nisi voluptate nulla reprehenderit officia consectetur dolor nostrud cillum duis. Dolore cupidatat eu veniam ut fugiat mollit ea. Reprehenderit nulla nisi cillum voluptate ex. Occaecat incididunt id mollit deserunt occaecat adipisicing ullamco ipsum. Minim ullamco adipisicing quis aliquip est ex sunt ea quis. Sint aute occaecat velit ipsum enim qui fugiat esse in officia excepteur irure. Enim eu dolore reprehenderit exercitation ullamco est nulla voluptate consectetur aliqua sit.',
    tags: [
      'Lorem',
      'ad',
      'et',
    ],
  },
  {
    requester_id: 7,
    assignee_id: 1,
    subject: 'proident est nisi non irure',
    description: 'Aute mollit ex nulla id culpa nisi enim amet enim duis laborum in. Eiusmod ea quis tempor voluptate deserunt tempor amet fugiat esse ea. Anim sunt nisi laboris dolor. Est ullamco voluptate dolor magna elit eu. Laboris reprehenderit irure occaecat excepteur.\n\nDo nisi commodo dolor eiusmod eiusmod non eu occaecat sunt incididunt irure consectetur do. Exercitation occaecat culpa voluptate exercitation sit. In aute eu nulla anim reprehenderit velit. Eu deserunt aliquip aute Lorem consectetur mollit non esse veniam irure excepteur cupidatat excepteur officia. Velit id et mollit cupidatat cillum elit dolor fugiat pariatur. Deserunt non eu consectetur duis ex consectetur duis eu proident.',
    tags: [
      'sit',
      'consectetur',
      'aute',
    ],
  },
  {
    requester_id: 8,
    assignee_id: 9,
    subject: 'veniam ea eu minim aute',
    description: 'Ex non officia in ullamco veniam fugiat cupidatat id aute. Quis minim et quis laborum excepteur. Non officia quis tempor quis nisi et. Aliqua tempor voluptate nulla esse sint. Id nulla consequat sint eiusmod nisi.\n\nCupidatat anim magna qui aliquip. Anim deserunt sint incididunt labore aliquip. Reprehenderit magna deserunt reprehenderit irure Lorem nulla est officia cupidatat in. Dolore ullamco veniam proident consectetur amet ad nulla amet commodo enim occaecat. Sint fugiat dolor aliqua proident. Ex enim eu pariatur qui officia cupidatat adipisicing esse qui fugiat. Do mollit quis cillum quis qui occaecat labore.',
    tags: [
      'aute',
      'ad',
      'et',
    ],
  },
  {
    requester_id: 9,
    assignee_id: 5,
    subject: 'magna reprehenderit nisi est cillum',
    description: 'Sit sit consequat magna aliquip officia qui. Fugiat amet id dolor sint exercitation sit. Eiusmod ex eiusmod voluptate voluptate est amet non culpa minim enim minim. Eiusmod fugiat veniam duis eiusmod sint laborum ex amet occaecat.\n\nNostrud consequat officia tempor amet eu. Non adipisicing dolore amet minim id consequat labore irure in esse et aliqua pariatur. Aliquip aliqua id ipsum amet laboris exercitation sunt cillum est et est. Tempor amet qui do dolore fugiat ad id nulla ullamco dolore tempor irure deserunt magna. Ipsum voluptate aliquip ut ad in pariatur adipisicing occaecat ea excepteur Lorem enim exercitation. Lorem sunt officia voluptate pariatur labore esse nostrud ullamco irure sit. Voluptate exercitation do aliquip eu consectetur.',
    tags: [
      'magna',
      'aliquip',
      'non',
    ],
  },
  {
    requester_id: 10,
    assignee_id: 5,
    subject: 'quis veniam ad sunt non',
    description: 'Magna culpa velit duis nisi sint veniam nisi adipisicing aute. Eiusmod id cupidatat pariatur tempor esse do. Aliquip ipsum voluptate eiusmod mollit. Et ullamco consectetur tempor cillum sunt anim enim cillum reprehenderit cillum proident. Eu aliqua excepteur eiusmod non ullamco aliqua esse laboris ad commodo reprehenderit pariatur consequat est.\n\nVoluptate eiusmod officia culpa nulla culpa mollit reprehenderit cillum adipisicing sit consectetur in. Anim occaecat excepteur commodo officia aute voluptate excepteur do ut esse occaecat duis consequat. Sunt minim est in non exercitation ad minim ullamco dolore in enim mollit aliquip. Ut ex dolore proident Lorem ut dolor ex. Laboris elit in in mollit. Quis id minim ex ad qui velit.',
    tags: [
      'aliquip',
      'consequat',
      'magna',
    ],
  }];

const server = setupServer(
  rest.get('/tickets', (req, res, ctx) => res(ctx.json(tickets))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Loads and displays tickets', async () => {
  const { queryAllByTestId } = render(<Tickets />);

  expect(queryAllByTestId('card')).toHaveLength(10);
  tickets.forEach((t, i) => {
    expect(queryAllByTestId('subject')[i]).toHaveTextContent(t);
  });
});

test('Handles server error', async () => {
  server.use(
    rest.get('/tickets', (req, res, ctx) => res(ctx.status(500))),
  );

  render(<Tickets />);

  const error = screen.getByText('500 Error: Could not load tickets. Please refresh the page.');

  expect(error).toBeInTheDocument();
});

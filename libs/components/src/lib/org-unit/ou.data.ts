import {OrgUnitNode} from "./org-unit.typings";

export const OUS: OrgUnitNode[] = [
  {
    id: '1',
    name: 'Fruit',
    children: [
      { id: '1.1', name: 'Apple' },
      { id: '1.2', name: 'Banana', disabled: true },
      { id: '1.3', name: 'Fruit loops' }]
  },
  {
    id: '2',
    name: 'Vegetables',
    children: [
      {
        id: '2.1',
        name: 'Green',
        children: [
          { id: '2.1.1', name: 'Broccoli' },
          { id: '2.1.2', name: 'Brussels sprouts' }
          ]
      },
      {
        id: '2.2',
        name: 'Orange',
        children: [
          { id: '2.2.2', name: 'Pumpkins' },
          { id: '2.2.3', name: 'Carrots' }
          ]
      }
    ]
  }
];

export const treeRootId = 1;
export const initialTree = {
  1: { id: '1', name: 'NODO ROOT', type: 'input', children: ['2', '3'] },
  2: { id: '2', name: 'NODO 2', children: ['9', '10'], onclick },
  3: { id: '3', name: 'NODOS 3', children: ['4', '5'] },
  4: { id: '4', name: 'NODO 4', children: ['6'] },
  5: { id: '5', name: 'NODO 5', children: ['6'] },
  6: { id: '6', name: 'NODO 6', children: ['8'] },
  8: { id: '8', name: 'NODO 8' },
  9: { id: '9', name: 'NODO 9' },
  10: { id: '10', name: 'NODO 10' },
};

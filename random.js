var quest = [
            'stack',
            'queue',
            'linked list',
            'circular queue',
            'binary search tree',
            'tree',
            'graph',
            'insertion techniques',
            'sorting',
            'bfs',
            'dfs',
            'A-B-D*E/F+B*C',
            'Convert the expression ((A + B) * C – (D – E) ^ (F + G)) to equivalent Prefix and Postfix notations',
            '-*+ABC^-DE+FG',
            'A+B',
            'A+B-C',
            '(A+B)*C-D',
            'Define linear Data Structure with example',
            'Explain queue data structure.',
            'List applications of linked list',
            'List types of Sorting algorithms',
            "List types of Linked list",
            'Depth of tree',
            'Describe the differences between a stack and a queue data structure.',
            'What is a binary tree and what are its advantages?',
            'Develop a program to implement ENQUEUE & DEQUEUE operations of queue.',
            'Explain AVL tree with example.',
            'Develop a program to implement PUSH & POP operations of stack.',
            'Explain Tree traversing techniques with example.',
            'Explain Tree traversing techniques with example.',
            'Describe Bucket sort with example.',
            'Explain Topological sort.',
            'Describe merge sort with example.',
            'What is the need for a doubly linked list?'
]

function newQuest(){
    var randomNumber = Math.floor(Math.random() * (quest.length));
    document.getElementById('questDisplay').innerHTML = quest[randomNumber];
}

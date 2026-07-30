// Auto-generated - do not edit
const data = []
for (let i = 0; i < 1000; i++) {
  data.push({
    id: i,
    name: `Item ${i}`,
    value: Math.random(),
    active: i % 2 === 0,
    tags: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    metadata: {
      created: new Date(),
      updated: new Date(),
      version: '1.0.' + i,
      notes: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'.repeat(10),
    },
    config: {
      setting1: true,
      setting2: false,
      setting3: 'default',
      setting4: 42,
      setting5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      nested: {
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: { g: { h: { i: { j: 'deep' } } } },
      },
    },
  })
}

export function getData() {
  return data
}

export function findById(id) {
  return data.find(item => item.id === id)
}

// Unused function
export function filterByTag(tag) {
  return data.filter(item => item.tags.includes(tag))
}

// Unused function
export function paginate(page, size) {
  const start = page * size
  return data.slice(start, start + size)
}

// Unused function  
export function sortBy(key) {
  return [...data].sort((a, b) => a[key] > b[key] ? 1 : -1)
}

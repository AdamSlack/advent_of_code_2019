const input = `.###..#######..####..##...#
########.#.###...###.#....#
###..#...#######...#..####.
.##.#.....#....##.#.#.....#
###.#######.###..##......#.
#..###..###.##.#.#####....#
#.##..###....#####...##.##.
####.##..#...#####.#..###.#
#..#....####.####.###.#.###
#..#..#....###...#####..#..
##...####.######....#.####.
####.##...###.####..##....#
#.#..#.###.#.##.####..#...#
..##..##....#.#..##..#.#..#
##.##.#..######.#..#..####.
#.....#####.##........#####
###.#.#######..#.#.##..#..#
###...#..#.#..##.##..#####.
.##.#..#...#####.###.##.##.
...#.#.######.#####.#.####.
#..##..###...###.#.#..#.#.#
.#..#.#......#.###...###..#
#.##.#.#..#.#......#..#..##
.##.##.##.#...##.##.##.#..#
#.###.#.#...##..#####.###.#
#.####.#..#.#.##.######.#..
.#.#####.##...#...#.##...#.`
// const input = 
// `.#..#
// .....
// #####
// ....#
// ...##`

const splitField = input.split('\n').map((line) => line.split(''))
console.log(splitField)

const field = splitField.map((line, y) => line.map((point, x) => ({
    val: point,
    isAsteroid: point === '#',
    x,
    y,
    canSee: 0
})))

console.log(' --- input verification ---')
console.log('Asteroid:', field[2][4])
console.log('x is 4?', field[2][4].x === 4)
console.log('y is 2?', field[2][4].y === 2 )
console.log('Max y:', field.length)
console.log('Max X:', field[0].length)

const getRadians = (a, b) => Math.atan2((b.y - a.y), (b.x - a.x))

const flatField = [].concat(...field) 
const asteroidsOnly = flatField.filter((a) => a.isAsteroid)

const asteroidsCanSee = asteroidsOnly.map((a) => {
    const radians = Array.from(new Set(asteroidsOnly.filter((b) => b.x !== a.y || b.y !== a.y ).map((b) => parseFloat(getRadians(a,b).toPrecision(4)))))
    return {
        ...a,
        // radians,
        canSee: radians.length 
    }
})

console.log(asteroidsCanSee)
console.log(Math.max(...asteroidsCanSee.map(({canSee}) => canSee)))

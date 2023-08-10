function solution(money) {
    let coffee = ~~(money / 5500);
    let change = money - (coffee * 5500);
    return [coffee, change]
}
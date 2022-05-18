// 一个number数组
// 1. 一个数出现了奇数次，其他数出现了偶数次，求这个数
// 如 let numbers = [3, 3, 2, 2, 2, 1, 1, 5, 5]，找出这个数是2
// 2. 两个数出现了奇数次，其他数出现了偶数次，求这两个数
// 如 let numbers = [3, 3, 3, 2, 2, 2, 1, 1, 5, 5, 8, 6, 6, 8]，找出这两个数是 3，2

// 1.
{
  let numbers = [3, 3, 2, 2, 2, 1, 1, 5, 5];
  let eor = 0;
  numbers.forEach(num => (eor ^= num)); // 偶数次出现的数异或为0
  console.log(eor);
}
// 2.
{
  let numbers = [3, 3, 3, 2, 2, 2, 1, 1, 5, 5, 8, 6, 6, 8];
  let eor = 0;
  numbers.forEach(num => (eor ^= num)); // eor = a ^ b != 0
  // eor 必然有1个位置上是1
  // 假设第8位是1 => a的第8位和b的第8位是不一样的
  let rightOne = eor & (~eor + 1); // 提出最右侧的1（这里不一定是第8位，总之就是最后侧的1位）
  // 整个数组分两类 1.第8位是1的数 2.第8位是0的数
  // 此时，整个的数组可以进一步被分为两类 1.a和others中第8位是1的数 2.b和others中第8位是0的数
  let eor1 = 0; // 用这个变量去异或分类1中的所有数，可以得到 eor1 = a or b
  numbers.forEach(num => {
    // 筛选出最右侧位置上为1的数，eor1只取异或这类数，得到的eor1一定是a or b
    if ((num & rightOne) === 0) {
      // (num & right) === rightOne 也行，总之需要筛选出一侧的数来进行异或
      eor1 ^= num;
    }
  });
  console.log(eor1, eor ^ eor1); // eor1 ^ eor = a ^ a ^ b = b 或者 b ^ a ^ b = a
}

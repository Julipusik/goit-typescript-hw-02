/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum weekDay { Monday = "work", Tuesday = "work", Wednesday = "work", Thursday = "work", Friday = "work", Saturday = "weekend", Sunday = "weekend" };

export function isWeekend(day: weekDay): boolean {
  return weekDay[day] !== "work" ? true : false;
}
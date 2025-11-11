function getRegexForGuid() {
  // GUID формата {XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}, где X — шестнадцатеричный символ
  return /^\{[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}\}$/;
}

function getRegexForPitSpot() {
  // Матчит pit, spot, spate, slap two, respite
  // Не матчит pt, Pot, peat, part
  // Длина < 13 символов
  return /p.t/;
}

function getPasswordValidator(minLength) {
  /**
   * Валидатор пароля:
   * - не короче minLength
   * - содержит хотя бы одну строчную букву
   * - содержит хотя бы одну заглавную букву
   * - содержит хотя бы одну цифру
   * - состоит только из букв, цифр и подчёркивания
   */
  return new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_]{${minLength},}$`,
  );
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};

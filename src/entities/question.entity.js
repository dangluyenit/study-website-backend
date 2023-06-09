const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.QUESTION,
  tableName: TABLE.QUESTION,
  target: TABLE.QUESTION,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    content: {
      type: 'nvarchar',
    },
    idBankQuestion: {
      type: 'uuid',
    },
  },
  relations: {
    bankQuestion: {
      target: TABLE.BANK_QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idBankQuestion',
      },
      joinTable: true,
      cascade: true,
    },
    questionAnswers: {
      target: TABLE.QUESTION_ANSWER,
      type: 'one-to-many',
      inverseSide: 'question',
    },
  },
});

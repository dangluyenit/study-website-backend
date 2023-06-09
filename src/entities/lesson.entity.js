const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.LESSON,
  tableName: TABLE.LESSON,
  target: TABLE.LESSON,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'nvarchar',
    },
    content: {
      type: 'nvarchar',
    },
    image: {
      type: 'varchar',
    },
    video: {
      type: 'varchar',
    },
    idCourse: {
      type: 'uuid',
    },
  },
  relations: {
    course: {
      target: TABLE.COURSE,
      type: 'many-to-one',
      joinColumn: {
        name: 'idCourse',
      },
      // inverseSide: 'lessons',
      cascade: true,
    },
  },
});

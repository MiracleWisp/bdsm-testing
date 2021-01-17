import {Question} from '../../app/models/question';

export const Questions: Question[] = [{
  questionNumber: 1,
  testNumber: 2,
  question: 'You are not sure if Flashback Database is enabled. What database column and view can you query to see if the flashback logs are being created in the flash recovery area?',
  answers: [
    'Query the initialization parameter FLASHBACK_DATABASE in VJINSTANCE',
    'Query the FLASHBACK_ENABLED column in VJDATABASE.',
    'Query the FLASHBACK column in VJDATABASE..',
    'Query the FLASHBACK_ON column in VJDATABASE.'
  ],
  correctAnswer: 3
}, {
  questionNumber: 2,
  testNumber: 2,
  question: 'What dynamic performance view can you query to list the supported platforms for transportable tablespaces?',
  answers: [
    'V$TRANSPORTABLE_PLATFORM',
    'V$TRANSPORTABLE_TABLESPACE',
    'V$SUPPORTED_PLATFORMS',
    'V$DATABASE PLATFORM'
  ],
  correctAnswer: 0
}];

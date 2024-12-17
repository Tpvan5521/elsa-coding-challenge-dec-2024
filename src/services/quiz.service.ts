import { db } from "configs/firebase.config";
import { child, get, onValue, ref, set } from "firebase/database";
import {
  CreateParticipantPayload,
  ParticipantType,
  QuizType,
} from "typescript/types";
import { reject, resolve } from "utils/api.util";
import { v4 as uuid } from "uuid";

export async function getRealTimeParticipants(sessionId: string) {
  const quizzesRef = ref(db, `sessions/${sessionId}`);
  onValue(quizzesRef, (snapshot) => {
    return resolve(snapshot.val());
  });
}

export function createParticipant(
  participantPayload: CreateParticipantPayload
) {
  const id = uuid();
  const quiz: ParticipantType = {
    ...participantPayload,
    id: id,
    createdAt: new Date().toISOString(),
    score: 0,
    hasFinishedAllQuestions: false,
  };
  set(ref(db, `users/${id}`), quiz);
}

export async function getQuizSessionById(sessionId: string) {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `sessions/${sessionId}`));
  if (snapshot.exists()) {
    return resolve(snapshot.val());
  }
  return reject("No quiz session found");
}

export async function getQuizById(quizId: string) {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `quizzes/${quizId}`));
  if (snapshot.exists()) {
    return resolve(snapshot.val());
  }
  return reject("No quiz found");
}

export async function getCorrectAnswer(questionId: string) {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `questions/${questionId}`));
  if (snapshot.exists()) {
    return resolve(snapshot.val());
  }
  return reject("No correct answer");
}

export async function getQuizHostById(hostId: string) {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `hosts/${hostId}`));
  if (snapshot.exists()) {
    return resolve(snapshot.val());
  }
  return reject("No correct answer");
}

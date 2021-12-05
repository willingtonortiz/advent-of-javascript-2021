import key1 from "../audio/key-1.mp3";
import key2 from "../audio/key-2.mp3";
import key3 from "../audio/key-3.mp3";
import key4 from "../audio/key-4.mp3";
import key5 from "../audio/key-5.mp3";
import key6 from "../audio/key-6.mp3";
import key7 from "../audio/key-7.mp3";
import key8 from "../audio/key-8.mp3";
import key9 from "../audio/key-9.mp3";
import key10 from "../audio/key-10.mp3";
import key11 from "../audio/key-11.mp3";
import key12 from "../audio/key-12.mp3";
import key13 from "../audio/key-13.mp3";
import key14 from "../audio/key-14.mp3";
import key15 from "../audio/key-15.mp3";
import key16 from "../audio/key-16.mp3";
import key17 from "../audio/key-17.mp3";
import key18 from "../audio/key-18.mp3";
import key19 from "../audio/key-19.mp3";
import key20 from "../audio/key-20.mp3";
import key21 from "../audio/key-21.mp3";
import key22 from "../audio/key-22.mp3";
import key23 from "../audio/key-23.mp3";

const pianoData = [
  { key: "key-01", audio: new Audio(key1) },
  { key: "key-02", audio: new Audio(key2) },
  { key: "key-03", audio: new Audio(key3) },
  { key: "key-04", audio: new Audio(key4) },
  { key: "key-05", audio: new Audio(key5) },
  { key: "key-06", audio: new Audio(key6) },
  { key: "key-07", audio: new Audio(key7) },
  { key: "key-08", audio: new Audio(key8) },
  { key: "key-09", audio: new Audio(key9) },
  { key: "key-10", audio: new Audio(key10) },
  { key: "key-11", audio: new Audio(key11) },
  { key: "key-12", audio: new Audio(key12) },
  { key: "key-13", audio: new Audio(key13) },
  { key: "key-14", audio: new Audio(key14) },
  { key: "key-15", audio: new Audio(key15) },
  { key: "key-16", audio: new Audio(key16) },
  { key: "key-17", audio: new Audio(key17) },
  { key: "key-18", audio: new Audio(key18) },
  { key: "key-19", audio: new Audio(key19) },
  { key: "key-20", audio: new Audio(key20) },
  { key: "key-21", audio: new Audio(key21) },
  { key: "key-22", audio: new Audio(key22) },
  { key: "key-23", audio: new Audio(key23) },
].reduce((accu, curr) => {
  return accu.set(curr.key, curr.audio);
}, new Map<string, HTMLAudioElement>());

export default pianoData;

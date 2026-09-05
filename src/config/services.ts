export interface Service {
  icon: string;
  title: string;
  desc: string;
  num: string;
  dark?: boolean;
  enabled?: boolean;
}

export const servicesConfig: Service[] = [
  { icon: 'speaker', title: 'ENSAIO', desc: 'Sala isolada e tratada acusticamente.', num: '01', enabled: true },
  { icon: 'camera', title: 'FOTOGRAFIA', desc: 'Ensaios fotográficos e gravação de vídeos.', num: '02', enabled: true },
  { icon: 'adaptive_audio_mic', title: 'KARAOKE', desc: 'Solta o gogó com a galera.', num: '03', enabled: false },
  { icon: 'mic', title: 'GRAVAÇÃO', desc: 'A alta fidelidade que o seu projeto demanda.', num: '04', dark: true, enabled: false }
];

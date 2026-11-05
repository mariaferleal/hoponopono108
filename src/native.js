import { Haptics } from '@capacitor/haptics';

// Expõe a vibração nativa do Android para a página, que é um HTML simples.
window.nativeHaptics = {
  vibrate: function (ms) {
    return Haptics.vibrate({ duration: ms });
  }
};

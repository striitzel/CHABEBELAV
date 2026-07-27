const shareButton = document.getElementById("shareButton");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

async function shareInvitation() {
  const pageUrl = window.location.href;

  const message = [
    "🎀 Chá de bebê surpresa da Lavínia!",
    "",
    "A Amanda ainda não sabe, então mantenha segredo 🤫",
    "Qualquer contribuição ajuda muito.",
    "As contribuições serão recebidas até 15/08/2026.",
    "",
    "Acesse o convite:"
  ].join("\n");

  const shareData = {
    title: "Chá de Bebê Surpresa da Lavínia",
    text: message,
    url: pageUrl
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
    }
  }

  const whatsappUrl =
    "https://wa.me/?text=" +
    encodeURIComponent(message + "\n" + pageUrl);

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  showToast("Abrindo o WhatsApp…");
}

shareButton.addEventListener("click", shareInvitation);

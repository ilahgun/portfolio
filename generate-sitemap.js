import SitemapGenerator from "sitemap-generator";
import { writeFile } from "fs";

// Ganti URL di bawah dengan URL situsmu
const generator = SitemapGenerator("https://www.ilahgun.me", {
  stripQuerystring: false,
});

// Menyimpan sitemap setelah proses selesai
generator.on("done", (sitemap) => {
  writeFile("./public/sitemap.xml", sitemap, (err) => {
    if (err) {
      console.error("Gagal menyimpan sitemap:", err);
    } else {
      console.log("Sitemap berhasil disimpan di ./public/sitemap.xml");
    }
  });
});

// Mulai membuat sitemap
generator.start();

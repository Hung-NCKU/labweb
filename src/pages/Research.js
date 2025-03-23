import React, { useEffect } from 'react';

const Research = () => {
  useEffect(() => {
    document.title = 'Research - INHPC';
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  return (
    <div className="content" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
      <h1>Message from the director</h1>

      <h2>研究目標</h2>
      <p>我們目前的研究工作，將著重於三大類主題：第一類為連結網路(interconnection networks)組合性質的分析；第二類為和圖論演算法設計與分析；第三類為計算分子生物學。</p>
      <p>在連結網路方面，由於VLSI技術的進步，使得在單一chip上可容納數百甚或數千之處理器(processors)，這些 processors該如何連結，使得它們能發揮最大的效能或使其具備某種性質，是值得深入探討的主題。此外，我們也將致力於容錯嵌入(fault-tolerant embedding)之研究，亦即當在 processors 或communication links 損毀的情況下，發展演算法完成嵌入環(ring)、線性陣列(linear array)、網格(mesh)於 host network。</p>
      <p>在圖論演算法設計與分析方面，眾所週知圖可以解決許多實際應用問題，而且也是許多理論研究分析的工具。我們先由基礎圖論性質的研究著手，然後藉由新性質的發現，設計高效率演算法，待理論突破後，再進一步探討其實際應用。</p>
      <p>在計算分子生物學方面，我們將配合生物研究人員的需求，以數學理論為基礎，在各式序列比對及演化樹建構方面發展高效率的分析工具。</p>

      <h2>研究與教學之配合</h2>
      <p>高深的研究必需建構在深厚的理論基礎之上，在教學上將以循序漸進的方式，加強學生邏輯推理的訓練，再依學生的興趣，指導其從事上述之研究。如此良性循環，有利研究教學品質之提昇。</p>

      <h2>未來展望</h2>
      <p>未來計劃配合時代趨勢，適時調整研究方向及整合研究資源，提高研究的質與量。</p>

      <h2>專題生研究成果</h2>
      <ul>
        <li>
          大眾運輸資訊整合系統
          <ul>
            <li>資訊111甲 蔡文賓</li>
            <li><a href="assets/pdfs/蔡文賓_大眾運輸資訊整合系統簡介.pdf" target="_blank">簡介</a></li>
            <li><a href="https://t.me/PtT_TeST001_Bot" target="_blank">成果</a></li>
          </ul>
        </li>
        <li>
          自動調整深度學習模型超參數之研究
          <ul>
            <li>資訊111乙 黃濬程</li>
            <li><a href="assets/pdfs/黃濬程_自動調整深度學習模型超參數之研究.pdf" target="_blank">簡介</a></li>
            <li><a href="assets/pdfs/黃濬程_ppt.pdf" target="_blank">投影片</a></li>
            <li><a href="assets/pdfs/黃濬程_研究成果報告.pdf" target="_blank">研究報告</a></li>
          </ul>
        </li>
        <li>
          基於機器學習的X光片骨折偵測
          <ul>
            <li>資訊110甲 朱柏綸</li>
            <li><a href="assets/pdfs/朱柏綸_基於機器學習的X光片骨折偵測.pdf" target="_blank">簡介</a></li>
            <li><a href="assets/pdfs/朱柏綸_基於機器學習的X光片骨折偵測_投影片.pdf" target="_blank">投影片</a></li>
          </ul>
        </li>
        <li>
          基於文字處理針對成大論文的 SDG 關鍵字推薦
          <ul>
            <li>資訊110甲 賴冠綸</li>
            <li><a href="assets/pdfs/賴冠綸_基於文字處理針對成大論文的SDG關鍵字推薦.pdf" target="_blank">簡介</a></li>
            <li><a href="assets/pdfs/賴冠綸_報告.pdf" target="_blank">投影片</a></li>
            <li><a href="https://ncku.shinyapps.io/SDG_Keyword" target="_blank">成果</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Research;
const Footer = () => {
  return (
    <footer className="bg-pink-50 mt-10 text-zinc-500">
      <div className="footerInner mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full flex pb-5 pt-16">
        <div className="footerInfo text-sm">
          <ul className="footerMenu flex gap-5 text-zinc-600 pb-7">
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이메일무단수집거부</li>
          </ul>
          <ul className="footerInfoList flex ">
            <li className="mr-5">
              <p>
                회사명
                <span className="ml-1">CNB(cinebooking)</span>
              </p>
            </li>
            <li className="mr-5">
              <p>
                대표이사
                <span className="ml-1">허민회</span>
              </p>
            </li>
            <li className="mr-5">
              <p>
                사업자등록번호
                <span className="ml-1">104-81-00000</span>
              </p>
            </li>
            <li className="mr-5">
              <p>
                대표전화
                <span className="ml-1">02-371-00000</span>
              </p>
            </li>
            <li className="mr-5">
              <p>
                FAX
                <span className="ml-1">02-371-00000</span>
              </p>
            </li>
            <li>통신판매업신고번호 제1184호</li>
          </ul>
          <address className="mt-1 not-italic">
            <p>
              본사
              <span className="ml-1">
                서울특별시 용산구 한강대로23길 55 (한강로3가,아이파크몰)6F
              </span>
            </p>
          </address>
        </div>
      </div>
      <div className="footerInner mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full flex pb-16">
        <p className="copyright text-sm text-zinc-400">
          COPYRIGHT (C)CINEBOOKING. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

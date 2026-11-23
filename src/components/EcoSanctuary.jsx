const CHIPS = [
  'Flower gardens',
  'Tree-lined alleys',
  'Arboreta',
  'Foreau Fernery',
  'Ayreaud Orchidarium',
  'Iron age relics',
  'Paliyars and Pulayars',
  'Kurinji blossoms',
];

export default function EcoSanctuary() {
  return (
    <div className="band">
      <section className="sec" id="eco">
        <div className="eyebrow">Eco Sanctuary and Heritage Centre</div>
        <h2 className="rv">Where Nature and Spirit grow together</h2>
        <div className="two">
          <div className="glass pad rv">
            <p>
              Shembaganur Jesuit campus emerged out of the community of love of
              Jesuit formators and formees. Besides their religious and academic
              pursuits, they dedicated themselves to the Mission and Ministry of
              Mother Earth by admiring, exploring and conserving Nature and the
              natural resources of the Palnis, worshipping the Creator through
              their stewardship and service of earth and creation. They walked
              humbly with joy on the hallowed land of Shembaga trees in the
              joyous company of myriad Kurinji blossoms. As sons of St. Ignatius
              and being contemplatives in action, they continued the work of God
              the Creator of Earth and Heaven by their wholehearted commitment
              to conservation.
            </p>
          </div>
          <div className="glass pad rv" style={{ '--d': '.15s' }}>
            <p>
              They established flower gardens, tree-lined alleys, arboreta, the
              Foreau Fernery and the Ayreaud Orchidarium. Meticulously, they
              documented the local flora and fauna and took delight in
              biological illustrations. The ancient inhabitants of the Palnis,
              the Paliyars and Pulayars, drew their attention which resulted in
              a scientific and archeological exploration.
            </p>
            <p>
              The South Indian iron age relics revealed to the world the tribal
              anthropology, indigenous knowledge systems, cultural and societal
              ethos.
            </p>
          </div>
        </div>

        <div className="txt">
          <p className="rv" style={{ marginTop: '28px' }}>
            As we recall such a hoary past of the SHC campus, it is a
            spectacular creation and joint enterprise of Nature and Humans
            working together. It is a living manifestation of eco spirituality
            that blossomed in the transformation of SHC campus into a sacred
            place for ecology, eco-heritage, nature spirituality, biodiversity
            conservation, environmental education and research.
          </p>
        </div>

        <div className="chips rv">
          {CHIPS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
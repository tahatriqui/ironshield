import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import vest1 from "../assets/categories/tacticalvest.jpeg";
import bagbackpack from "../assets/categories/bagbackpack.jpeg";
import combatuniforms from "../assets/categories/combatuniforms.jpeg";
import ballistichelmet from "../assets/categories/ballistichelmet.jpeg";
import ballisticvisor from "../assets/categories/ballisticvisor.jpeg";
import ballisticvest from "../assets/categories/ballisticvest.jpeg";
import footwear from "../assets/categories/footwear.jpeg";
import plates from "../assets/categories/plates.jpeg";
import Bulletproofshield1 from "../assets/Bulletproofshield/1.webp";
const categoriesData = [
  {
    key: "tactical-vest",
    nameKey: "tactical_vest",
    image: vest1,
  },
  {
    key: "backpacks",
    nameKey: "bag_backpack",
    image: bagbackpack,
  },
  {
    key: "uniforms",
    nameKey: "combat_uniforms",
    image: combatuniforms,
  },
  {
    key: "helmets",
    nameKey: "ballistic_helmet",
    image: ballistichelmet,
  },
  {
    key: "shields",
    nameKey: "bulletproof_shield",
    image: Bulletproofshield1,
  },
  {
    key: "visors",
    nameKey: "ballistic_visor",
    image: ballisticvisor,
  },
  {
    key: "ballistic-vests",
    nameKey: "ballistic_vest",
    image: ballisticvest,
  },
  {
    key: "footwear",
    nameKey: "footwear",
    image: footwear,
  },
  {
    key: "plates",
    nameKey: "plates",
    image: plates,
  },
];

const CategoryGrid = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      id="categories"
      className="responsive-section"
      style={{ padding: "8rem 0", background: "var(--bg-dark)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2
            className="section-title"
            style={{
              fontWeight: "800",
              letterSpacing: "0.2em",
              marginBottom: "2rem",
            }}
          >
            {t("categories.title")}
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "var(--primary)",
              margin: "0 auto",
            }}
          ></div>
        </div>

        <div
          className="category-grid"
          style={{
            display: "grid",
            gap: "2px", // Thin border effect between cards
            background: "var(--border)", // This acts as the grid line
            border: "1px solid var(--border)",
          }}
        >
          {categoriesData.map((cat) => (
            <div
              key={cat.key}
              onClick={() => navigate(`/category/${cat.key}`)}
              style={{
                background: "var(--bg-surface)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "1 / 1.1",
                display: "flex",
                flexDirection: "column",
                transition: "var(--transition-smooth)",
              }}
              className="category-card"
            >
              <div
                style={{
                  flex: 1,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                  background: "#fff", // White background for the image like in the sample
                }}
              >
                <img
                  src={cat.image}
                  alt={t(`categories.${cat.nameKey}`)}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    transition: "transform 0.5s ease",
                  }}
                  className="category-img"
                />
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-surface)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t(`categories.${cat.nameKey}`)}
                </h3>
                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    background: "var(--accent-coyote)",
                    opacity: 0.6,
                  }}
                ></div>
              </div>

              {/* Hover Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(99, 110, 75, 0.1)",
                  opacity: 0,
                  transition: "var(--transition-smooth)",
                  pointerEvents: "none",
                }}
                className="category-overlay"
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-title {
          font-size: 5.5rem;
        }
        .category-grid {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }

        @media (max-width: 768px) {
          .responsive-section { padding: 4rem 0 !important; }
          .section-title { font-size: 2rem !important; }
          .category-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) !important;
          }
          .category-card { aspectRatio: 1 / 1.2 !important; }
        }

        .category-card:hover .category-img {
          transform: scale(1.05);
        }
        .category-card:hover .category-overlay {
          opacity: 1;
        }
        .category-card:hover {
          background: var(--bg-surface-soft);
        }
      `}</style>
    </section>
  );
};

export default CategoryGrid;
